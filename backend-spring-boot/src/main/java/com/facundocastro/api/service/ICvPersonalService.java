package com.facundocastro.api.service;

import com.facundocastro.api.model.CvPersonal;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

public interface ICvPersonalService {
    public CvPersonal store(MultipartFile file) throws IOException;
    public CvPersonal getFile(String nombre);
    public Stream<CvPersonal> getAllFiles();
    public  void deleteFile();
}
