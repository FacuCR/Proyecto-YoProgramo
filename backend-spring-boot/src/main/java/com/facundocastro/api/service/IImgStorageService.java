package com.facundocastro.api.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.stream.Stream;

public interface IImgStorageService {
    public void init();
    public void save(MultipartFile file);
    public Resource load(String filename);
    public Stream<Path> loadAll();
}
